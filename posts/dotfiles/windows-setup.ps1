# Small script to set things up on windows

# Remove "Search the web" functionality in the windows search bar. 
# Run with admin access.
reg add HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /d 1

# Install applications
param ($installTypes='base')

# Check out the package manager "Winget" By Microsoft
# https://github.com/microsoft/winget-cli/release

# VS Code
winget install Microsoft.VisualStudioCode

# PowerShell-7: The default powershell that comes along with windows is slooooow
winget install Microsoft.PowerShell

# Git: requires some extra configurations, namely to not add context menus
winget install Git.Git --interactive


# Get from the windows store
# ---
# Windows Terminal :P
# winget install Microsoft.WindowsTerminal

# Python
# winget install Python.Python.3
# ---

foreach ($installType in $installTypes) {

    # VLC Media player: Needed to play .mkv files
    if ($installType -eq 'vlc') {
        winget install VideoLAN.VLC
    }

    # Mailspring: Is an opensource mail client
    if ($installType -eq 'mailspring') {
        winget install mailspring
    }

    # Microsoft office
    if ($installType -eq 'office') {
        winget install office
    }
    
    # Windows Subsystem for Linux (WSL)
    if ($installType -eq 'wsl') {
        # This is the simplified install version
        # Default distro Ubuntu is installed
        # Default WSL version == 2
        wsl --install
    }
}
