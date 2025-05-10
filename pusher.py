import sys
import subprocess
import argparse
import os

# Colors
GREEN = '\033[92m'      # Success messages
YELLOW = '\033[93m'     # Warnings
RED = '\033[91m'        # Errors
BLUE = '\033[94m'       # Pull operations
MAGENTA = '\033[95m'    # Push operations
CYAN = '\033[96m'       # Reset operations
ORANGE = '\033[38;5;214m'  # Setup operations
RESET = '\033[0m'

# Banner
print("\n## Git Automation Script - Done by AtutiBonface Sozini Xengine ##\n")

parser = argparse.ArgumentParser(
    description='Git helper - Automates either push, pull, or reset operations (one at a time)',
    formatter_class=argparse.RawDescriptionHelpFormatter,
    epilog=f'''
Examples:
    {MAGENTA}python pusher.py --push{RESET}                   # Add, commit, push to main
    {MAGENTA}python pusher.py --push -b develop{RESET}         # Push to develop
    {MAGENTA}python pusher.py --push -m "fix: bug"{RESET}      # Push with custom message
    {BLUE}python pusher.py --pull{RESET}                    # Pull latest changes
    {CYAN}python pusher.py --reset hard{RESET}              # Reset --hard to remote
    {ORANGE}python pusher.py --setup{RESET}                   # Run the setup wizard
    '''
)

parser.add_argument('--push', action='store_true', help='Push changes to remote')
parser.add_argument('--pull', action='store_true', help='Pull changes from remote')
parser.add_argument('--reset', choices=['hard', 'soft', 'mixed'], help='Reset the branch (hard, soft, mixed)')
parser.add_argument('-b', '--branch', default='main', help='Branch to push/pull/reset (default: main)')
parser.add_argument('-m', '--message', default='Auto commit', help='Commit message for push (default: "Auto commit")')
parser.add_argument('--setup', action='store_true', help='Run initial Git setup and configuration')

args = parser.parse_args()

def run(command):
    """ Helper to run shell commands and handle errors """
    process = subprocess.run(command, shell=True, capture_output=True, text=True)
    if process.returncode == 0:
        print(f"{GREEN}⌗ {command} done!{RESET}")
        return process.stdout
    else:
        print(f"{RED}⊗ Error in: {command}{RESET}")
        print(f"{RED}{process.stderr}{RESET}")
        sys.exit(1)

# Handle setup mode
if args.setup:
    print(f"{ORANGE}⇘ Setting up Git environment...{RESET}")
    install_choice = input("Do you want to install Git? (y/n): ").strip().lower()
    if install_choice == "y":
        run(f"sudo apt install git")
    
    user_name = input("Enter your GitHub username: ").strip()
    user_email = input("Enter your GitHub email: ").strip()
    run(f'git config --global user.name "{user_name}"')
    run(f'git config --global user.email "{user_email}"')
    
    init_choice = input("Do you want to initialize a new Git repository here? (y/n): ").strip().lower()
    if init_choice == "y":
        run("git init")
    
    repo_url = input("Enter your GitHub repository URL (e.g., https://github.com/your-username/repo.git): ").strip()
    run(f"git remote add origin {repo_url}")
    run("git remote -v")
    
    auth_choice = input("Do you want to set the remote URL with authentication? (y/n): ").strip().lower()
    if auth_choice == "y":
        github_token = input("Enter your GitHub Personal Access Token: ").strip()
        repo_name = repo_url.split('/')[-1]
        auth_url = f"https://{user_name}:{github_token}@github.com/{user_name}/{repo_name}"
        run(f"git remote set-url origin {auth_url}")
    
    commit_message = input("Enter commit message (default: 'Initial commit'): ").strip() or "Initial commit"
    run("git add .")
    run(f'git commit -m "{commit_message}"')
    
    branch = input("Enter branch name (default: main): ").strip() or "main"
    run(f"git push origin {branch}")
    print(f"{GREEN}⌗ Git setup and push completed successfully!{RESET}")
    sys.exit(0)

selected_actions = [args.push, args.pull, args.reset is not None]
if sum(selected_actions) != 1 and not args.setup:
    print(f"{RED}⊘ Error: You must choose exactly ONE of --push, --pull, --reset, or --setup.{RESET}")
    sys.exit(1)

# Handle push
if args.push:
    print(f"{MAGENTA}⇗ Pushing changes to {args.branch}...{RESET}")
    
    run("git add .")
    
    status = subprocess.run("git status --porcelain", shell=True, capture_output=True, text=True)
    if not status.stdout.strip():
        print(f"{YELLOW}⚠ Nothing to commit. Skipping push.{RESET}")
        sys.exit(0)
    
    run(f'git commit -m "{args.message}"')
    run(f"git push origin {args.branch}")

elif args.pull:
    print(f"{BLUE}⇘ Pulling latest changes from {args.branch}...{RESET}")
    run(f"git pull origin {args.branch}")

elif args.reset:
    if args.reset == 'hard':
        confirm = input(f"{CYAN}⚠ Warning: --hard reset will discard all local changes! Continue? (y/n): {RESET}")
        if confirm.lower() != 'y':
            print(f"{YELLOW}⊘ Cancelled.{RESET}")
            sys.exit(0)
    
    print(f"{CYAN}⟲ Resetting {args.branch} branch with --{args.reset}...{RESET}")
    run("git fetch origin")
    run(f"git reset --{args.reset} origin/{args.branch}")