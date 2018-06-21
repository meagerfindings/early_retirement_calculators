# Early Retirement Calculators
Financial Independence Retire Early Calculators built using React JS.

## Todo:
- Add option to add salary and then use percentage to override monthly savings input
- Add Descriptions of all assumptions / inputs.
- change ids & next id to work solely off the index of the array, this will help for dynamic generation of stages if we let users add/remove stages in the future
    - prevent last item from having next goal progress 
- ~~add charts to visualize progress towards goals.~~
    - ~~maybe use: [https://github.com/reactjs/react-chartjs](https://github.com/reactjs/react-chartjs)~~
    - Make reference lines dynamic so they respect changes to fistages
- move fiStages into render from state 

## Dependencies:
- React 
- React-Bootstrap
- [recharts](http://recharts.org/#/en-US/guide/installation)
    ```
    npm install recharts    
    ```