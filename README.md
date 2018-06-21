# Early Retirement Calculators
Financial Independence Retire Early Calculators built using React JS.

## Todo:
- Add option to add salary and then use percentage to override monthly savings input
- Add Descriptions of all assumptions / inputs.
- ~~change ids & next id to work solely off the index of the array, this will help for dynamic generation of stages if we let users add/remove stages in the future~~
    - ~~prevent last item from having next goal progress~~
    - **Not working on these to simplify project and due to limitations within ReCharts not allowing reference lines to be dynamically generated.
- ~~Bug: Entering 0 on Monthly savings crashes the app~~
    - ~~or is this 0 on monthly and 0 on savings?~~
    - ~~if we add input validation, will this solve this issue?~~
    - Do not accept 0 or blank input which prevents division/multiplication by 0.

## Dependencies:
- React 
- React-Bootstrap
- [recharts](http://recharts.org/#/en-US/guide/installation)
    ```
    npm install recharts    
    ```