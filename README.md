# CLI Workshop Project

A command-line interface tool built with TypeScript and Node.js, featuring various utility commands for everyday tasks.

## Features

- Math Operations: Basic arithmetic operations (add, subtract, multiply, divide)
- Greeting: Personalized greetings
- Entertainment: Random jokes and quotes
- Pokemon Information: Fetch Pokemon stats and details
- Weather: Get weather information for any city
- Currency Conversion: Real-time currency exchange rates
- Time Zones: Get current time in any timezone

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Dhruv-2403/SESD_WORKSHOP-2.git
   cd SESD_WORKSHOP-2/Workshop
   ```

2. Install dependencies
   ```bash
   npm init -y & npm install commander & npm install -D typescript ts-node nodemon @types/node
   ```

3. Build the project
   ```bash
   npx tsc
   ```

4. Set up global link (makes Cli available globally)
   ```bash
   npm link
   ```

5. Run the CLI
   ```bash
   myCli <command>
   ```

## Available Commands

### Math Operations
- `add <x> <y>` - Add two numbers
- `subtract <x> <y>` - Subtract two numbers
- `multiply <x> <y>` - Multiply two numbers
- `divide <x> <y>` - Divide two numbers

### Greeting
- `greet <name>` - Greet someone by name

### Entertainment
- `joke` - Get a random joke
- `quote` - Get an inspirational quote

### Information Services
- `pokemon <name>` - Get Pokemon information and stats
- `weather <city>` - Get weather information for a city
- `currency <amount> <from> <to>` - Convert currency
- `time [timezone]` - Get current time (local or specific timezone)

## Example Usage

### Basic Math Operations
```bash
# Addition
myCli add 15 7
# Output: 22

# Subtraction
myCli subtract 20 8
# Output: 12

# Multiplication
myCli multiply 6 4
# Output: 24

# Division
myCli divide 15 3
# Output: 5
```

### Greeting
```bash
myCli greet Alice
# Output: Hello Alice
```

### Entertainment
```bash
# Get a random joke
myCli joke
# Output: [Random joke punchline]

# Get an inspirational quote
myCli quote
# Output: [Inspirational quote]
```

### Pokemon Information
```bash
myCli pokemon pikachu
# Output: 
# Name: pikachu
# Stats:
# hp: 35
# attack: 55
# defense: 40
```

### Weather Information
```bash
myCli weather London
# Output: [Weather data for London]
```

### Currency Conversion
```bash
myCli currency 100 USD EUR

```

### Time Information
```bash
# Local time
myCli time


# Specific timezone
myCli time Europe/London

```

## Project Structure

```
Workshop/
├── cli.ts        
├── cli_engine/
│   └── cli_engine.ts    
├── commands/
│   ├── BaseCommand.ts    
│   ├── addCommand.ts   
│   ├── subtractCommand.ts  
│   ├── mathCommand.ts   
│   ├── greetCommand.ts  
│   ├── jokeApiCommand.ts 
│   ├── quoteCommand.ts  
│   ├── pokemonCommand.ts 
│   ├── weatherCommand.ts 
│   ├── currencyCommand.ts 
│   └── timeCommand.ts    
├── dist/              
├── node_modules/       
├── package.json         
└── tsconfig.json         
```

## Technologies Used

- TypeScript - Type-safe JavaScript
- Node.js - JavaScript runtime
- Commander.js - Command-line interface framework
- Axios - HTTP client for API calls
- Chalk - Terminal styling and colors

## API References

### External APIs Used

- Official Joke API - `https://official-joke-api.appspot.com/random_joke`
- Zen Quotes API - `https://zenquotes.io/api/random`
- PokéAPI - `https://pokeapi.co/api/v2/pokemon/{name}`
- WTTR.in - `https://wttr.in/{city}?format=j1`
- Exchange Rate API - `https://api.exchangerate-api.com/v4/latest/{from}`
- World Time API - `http://worldtimeapi.org/api/timezone/{timezone}`

## Built By Dhruv Sareen

