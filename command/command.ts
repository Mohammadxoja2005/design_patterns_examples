interface Command {
    execute(): void;

    undo(): void;
}

class TurnOnCommand implements Command {
    execute() {
        console.log("Turn on light...")
    }

    undo() {
        console.log("Undo turn on...")
    }
}

class TurnOfCommand implements Command {
    execute() {
        console.log("Turn of command...");
    }

    undo() {
        console.log("Undo turn of...");
    }
}

class RemoteControl {
    private command?: Command;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        if (this.command) {
            this.command.execute();
        }
    }

    pressUndo() {
        if (this.command) {
            this.command.undo();
        }
    }
}

