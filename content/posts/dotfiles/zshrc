# Conventions

# This is a heading
## This is a subheading
#This is code that is commented out

# Aliases

# Python Aliases
alias pip='python3 -m pip'
alias python='python3'
alias py='python3'

# Grep Alias
alias grep='grep --color'

# ls Alias
alias ls='ls --color'

# Prompt customization
## checkout https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Prompt-Expansion
## $ : Required for unicode parsing
## %F....%f is for setting Foreground colors,
## colors specified in {color/color_code} format
## %B....%b for bold text
## %n for username
## %m for machine name (condensed)
## %~ for pwd, but with $HOME prefix,
## 3 for the number of parent dirs to show
## alternatively use %d or %/ for full paths
## \U0000 for unicode
## %(?.if_reu\turn_code_istrue.if_reuturn_code_isfalse)
## Next we have colorized the output for each case (true/false)
## We can also have a newline with a \n

# Right Prompt
## You can have entries on the Right of the prompt with RPROMPT
## eg: RPROMPT=$'%F{111}%3~%f' Will show directory structure on the right

# Prompt with ➜ Symbol (Heavy Round-Tipped Rightwards Arrow)
export PROMPT=$'%F{green}%B%n@%m%b%f %F{111}%3~%f %(?.%F{green}\U279c%f.%F{red}\U279c%f) '

# Prompt with ❯ Symbol and Right Prompt for dir

#RPROMPT=$'%F{111}%3~%f'
#export PROMPT=$'%F{green}%B%n@%m%b%f %(?.%F{green}\U276F%f.%F{red}\U276F%f) '

# Prompt with ❯ Symbol (Heavy Right-Pointing Angle Quotation Mark Ornament)
#export PROMPT=$'%F{green}%B%n@%m%b%f %F{111}%3~%f %(?.%F{green}\U276F%f.%F{red}\U276F%f) '

# Prompt with ❯ Symbol and a newline
#export PROMPT=$'%F{green}%B%n@%m%b%f %F{111}%3~%f \n%(?.%F{green}\U276F%f.%F{red}\U276F%f) '

# Prompt with > Symbol (for when you dont have ascii support in terminal)
#export PROMPT=$'%F{green}%B%n@%m%b%f %F{blue}%3~%f %(?.%F{green}>%f.%F{red}>%f) '


# ---
# The following lines were added by compinstall

zstyle ':completion:*' completer _complete _ignored _approximate
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' matcher-list 'm:{[:lower:][:upper:]}={[:upper:][:lower:]}' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]}'
zstyle ':completion:*' menu select=1
zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
zstyle :compinstall filename '~/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
# Lines configured by zsh-newuser-install
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
bindkey -e
# End of lines configured by zsh-newuser-install

# You can invoke the new user install again by running 
# autoload zsh-newuser-install && zsh-newuser-install -f
