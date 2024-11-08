# KPS FE Candidate TEST - Angular

This is a test that will allow applying candidate to demonstrate their coding skills.

## Keep in mind
- Please use the latest version of Angular when working on this task.
- Try to have a least one commit per task so that we can see the work progress
- Use descriptive commit comments
- It's up to you whether you want to push regularly or once you are finished with all of your commits
- Things to consider: performance, efficient use of space, usability, cross-browser, responsiveness.
- Show that you understand how version control works by using following commands: `branch`, `merge` and `rebase`


## Tasks

### 1. Create product listing page

- Create a route called `/products` where you will have a full width page with a header, a footer and a main section.
- The page should be fully responsive.
- Add toggle option between list and grid view
- The main section should be populated with products coming from an HTTP request to an endpoint containing the data from a `products.json`
- Each product should include
    - Image thumbnail
    - Product name
    - Product price (current, was and discount price),
    - Size
    - Link to `url` key
    - Add favourite
- Desktop design for products layout is provided in `<root>/plp-design.png`
- Add Unit Tests
- Add comments on what other improvements would you add to this page
- **Optional task:** The data set is reasonably large so we need to be able to: 
    - **filter the data by:** category, price, size
    - **sort the data by:** price (ascending), price (descending) and name (ascending)


### 2. Create dashboard

- Create a route called `/dashboard` where you will have a full width page with a header, a footer and a main section.
- Prepare three components:
    - The first component should display a list of posts from this endpoint https://jsonplaceholder.typicode.com/posts. There should be button "Remove" next to each item in the list
    - The second component should display a list of photos from this endpoint https://jsonplaceholder.typicode.com/photos. There should be button "Remove" next to each item in the list
    - The third component should be named "Removed Items". When the user clicks on the "Remove" buttons, the item should be removed from the list and should be presented in the "Removed Items" component. Please try to avoid using `@Input` and `@Output` decorators.
- Add Unit Tests


## Finished

Please email [stephanie.wilson@kps.com, simon.holmes@kps.com and parissa.kamal@kps.com](mailto:stephanie.wilson@kps.com;simon.holmes@kps.com;parissa.kamal@kps.com?subject=Candidate%20test%20completed) so that we know your work is ready to be reviewed. Please include a link to this repository in your email.
