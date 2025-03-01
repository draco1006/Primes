import "wasi";
import { PrimeSieve } from './sieve';

export function bench(): void {
    let passes = 0;
    let sieve: PrimeSieve | null;
    const startTime = Date.now();
    while (Date.now() - startTime < 10000) {
        sieve = new PrimeSieve(1000000);
        sieve.runSieve();
        ++passes;
    }
    const dt = ((Date.now() - startTime) as f32) / 1000.0;
    if (sieve) sieve.printResults(false, dt, passes);
}
