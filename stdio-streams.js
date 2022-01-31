process.stdin.on('redable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write(chunk);
    }
});