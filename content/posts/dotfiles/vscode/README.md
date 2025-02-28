# Colorscheme 

[Bear Theme](https://marketplace.visualstudio.com/items?itemName=dahong.theme-bear)

[Bearded Theme](https://marketplace.visualstudio.com/items?itemName=BeardedBear.beardedtheme)

[Edge](https://marketplace.visualstudio.com/items?itemName=sainnhe.edge)

[Github Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)

[GruvBox Material Theme](https://marketplace.visualstudio.com/items?itemName=sainnhe.gruvbox-material)

# Font
[Jetbrains Nerd font Medium](https://www.nerdfonts.com/font-downloads)
```
"editor.fontFamily": "JetBrainsMono NF Medium",
```

# Extentions
[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) for inline error highlighting.

[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) as a lightweight postman alternative.

# Most Important Settings

```json
"editor.suggest.preview": true,
"editor.minimap.autohide": true,
"editor.cursorBlinking": "phase",
"editor.wordWrap": "on",
"workbench.activityBar.location": "top",
"window.autoDetectColorScheme": true,
"editor.suggest.localityBonus": true
```

# Reseting Pane sizes (of sidebar and terminal)

Move the cursor till the option to resize comes up, and then just double click! and it will resize!

[Learnt from here](https://dev.to/entrptaher/vscode-trick-reset-the-sidebar-and-terminal-pane-size-5cd1)

# Using the Native Title Bar

You can use the native title bar of each platform (Is set as true by default on Linux).

To do this go to preferences -> `window: title bar style` and set it to native.

You can also set this in `settings.json` with `"window.titleBarStyle": "native"`

#### You can also enable Command Center layout for vscode
set `"window.commandCenter": true`

#### Layout Control (icons that appear on the top right)
you can control their visibility using `"workbench.layoutControl.enabled": false`

# Activity and Status Bar
These can be controlled using 

1. `View > Appearance`
2. Layout Control
3. Settings

From Version 1.84, you can also move [Activity bar to the top](https://code.visualstudio.com/updates/v1_84#_customize-activity-bar-position)

```
"workbench.statusBar.visible": true,
"workbench.activityBar.visible": true,
"workbench.activityBar.location": "top"
```

# Git Blame info 
Introduced with [`v1.96`](https://code.visualstudio.com/updates/v1_96#_source-control)

```
"git.blame.editorDecoration.enabled": true,
```

Optionally also:

```
"git.blame.statusBarItem.enabled": true,
"git.blame.editorDecoration.template": "${subject}, ${authorName} (${authorDateAgo})"
```

# Day/Night theme

`"window.autoDetectColorScheme": true,` enables day/night mode detection

Default themes for the day/night mode can be controlled using:

```json    
"workbench.preferredDarkColorTheme": "Default Dark+",
"workbench.preferredLightColorTheme": "Default Light+",
```

# Copilot-WSL httpProxy settings
For Copilot to run under WSL, you need to disable `http.proxySupport`:

```
"http.proxySupport": "off"
```

# Python language server
You can use Jedi server or Pylance. However intellicode only works with pylance
