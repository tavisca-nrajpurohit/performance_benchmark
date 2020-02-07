# performance_benchmark
Identifying Performance Benchmark using Lighthouse on Sample Apps

Sample App Lighthouse Performance Benchmark by analyzing result reports from - 

    ORXe Components

    Angular web-components

    native HTML components

These results will be on the following configurations - 

    No-Throttling

    Simulated Throttling
    
## Command used
### No-Throttling
    lighthouse-batch -h -f ./componentsURL.txt -o ./lighthouse_results/no_throttling/r5/ --params "--emulated-form-factor=mobile --throttling-method=provided  --only-categories=performance" 
### Throttling
    lighthouse-batch -h -f ./componentsURL.txt -o ./lighthouse_results/throttling/r5/ --params "--emulated-form-factor=mobile   --only-categories=performance"
