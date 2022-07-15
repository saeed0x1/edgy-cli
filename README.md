# edgy-cli

This is the command line version of <a href="https://github.com/zerodayrat/Edgy-API">Edgy API</a>. As developers we don't have much time to open websites and look for jokes. so now you can enjoy random jokes
and light up your mood right from your terminal.

# Installation

```bash
npm install edgy-cli
```

# Usage

- TO GET THE HELP MENU

```bash
$ edgy-cli help
```
or 

```bash
$ edgy-cli --help/-h
```

```bash
  COMMANDS 

  help  Print help info.

  OPTIONS 

  -j, --joke      Fetch a random joke from Edgy API.
  -i, --info      Print developer info.
  -c, --clear     Clear the console.
  -nc, --noClear  Don't clear the console.
  -h, --help      Show help
  -d, --debug     Print debug info.
  -v, --version   Print CLI version.
```

- TO SEE A RANDOM JOKE

```bash
edgy-cli -j/--joke
```



Have fun :)
