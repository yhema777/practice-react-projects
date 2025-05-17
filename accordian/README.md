# Sharing state between components

# Step 1:
- Remove the state from the child components and add it innthe common parent si that u can pass it down tho the children components

# Step 2:
- First, hardcode the visible index to 0

# Step 3:
- In the onClick function, pass the index of the Accordian component like if it's first one, index will be 0. 2nd index will be 1. based on that index state of Visible index will change.


- Overall, we are achieving when one accordian is open, others will be closed