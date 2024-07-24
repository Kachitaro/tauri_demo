# Getting Started

The first step is to install Rust and system dependencies

## Setting up Windows

1. Microsoft Visual Studio C++ Build Tools
   - C++ build tools
   - Windows 10 SDK
2. WebView2
3. Rust
   - run `winget install --id Rustlang.Rustup`
   - run `rustup default stable-msvc`

## Setting Up macOS

1. CLang and macOS Development Dependencies
   - run `xcode-select --install`
2. Rust ( Can also be installed for Linux )
   - run `curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh`

## Setting Up Linux

System Dependencies

```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

## Install Tauri CLI

```bash
yarn add -D @tauri-apps/cli
```

## Installation

Install the application dependencies by running:

```bash
yarn
```

## Development

With Web Views

```bash
yarn dev
```

With Application

```bash
yarn tauri dev
```

## Build

```bash
yarn tauri build
```

Build with debug mod

```bash
yarn tauri build --debug
```
