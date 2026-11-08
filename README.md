# PayWay Payment QR Decoder

![Language](https://img.shields.io/github/languages/top/panhavad/payway-payment-qr-decoder) ![Last commit](https://img.shields.io/github/last-commit/panhavad/payway-payment-qr-decoder) [![Release](https://img.shields.io/github/v/release/panhavad/payway-payment-qr-decoder?include_prereleases)](https://github.com/panhavad/payway-payment-qr-decoder/releases/latest)

An **educational analysis of PayWay (ABA) payment QR codes** in Cambodia. Scan or paste a QR payload and the page breaks it into its fields - amount, merchant / vendor ID and more - and checks the **CRC** checksum. For learning only.

![System snapshot](docs/snapshot.svg)

## Features

- Camera QR scanning with jsQR
- Field-by-field payload extraction
- CRC calculator to validate payloads
- Runs fully in the browser

## How it works

```mermaid
flowchart LR
    C["Camera / pasted text"] --> Q["jsQR decode"]
    Q --> E["extractor.js"]
    E --> F["Amount, vendor id, fields"]
    E --> K["crc.js checksum"]
    F --> UI["Result table"]
    K --> UI
```

## Getting started

Open `index.html` (decoder), `scanner_demo.html` (camera) or `index_crc.html` (CRC tool) in a browser.

## Download

Grab the packaged source from the [latest release](https://github.com/panhavad/payway-payment-qr-decoder/releases/latest).

## Tech stack

- HTML
- JavaScript
- jsQR

## Project structure

```text
payway-payment-qr-decoder/
├── docs/
├── src/
├── index.html
├── index_crc.html
├── raw analysis
├── README.md
└── scanner_demo.html
```
