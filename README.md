# performance_benchmark
Identifying Performance Benchmark using Lighthouse on Sample Apps

Sample App Lighthouse Performance Benchmark by analyzing result reports from - 

    ORXe Components

    Angular web-components

    native HTML components

These results will be on the following configurations - 

    No-Throttling

    Simulated Throttling
    
    
## How to Run
*clone repo
*open any sample app in terminal (say 'native_elements')
*cd html_files
*http_server (to host the files on the server)
*open the same sample app in another terminal (cd 'native_elements')
* <edit the lighthouse command output and throttling config, then run the lighthouse-batch command>
*You'll see the results in the output path specified.
    
    
## Command used
### No-Throttling
    lighthouse-batch -h -f ./componentsURL.txt -o ./lighthouse_results/no_throttling/r5/ --params "--emulated-form-factor=mobile --throttling-method=provided  --only-categories=performance" 
### Throttling
    lighthouse-batch -h -f ./componentsURL.txt -o ./lighthouse_results/throttling/r5/ --params "--emulated-form-factor=mobile   --only-categories=performance"
