
<h1>Overview</h1>
<p>This is a multistep form I created with React. This challenge helped me get really familiar with useState and forms. There was also a lot of functionality that was implemented to create a dynamic form that can be navigated.</p>

<h2>The Challenge</h2>  
  Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

<h2>Screenshot</h2>
<img src="https://github.com/ray-mak/multistep-form/assets/154634286/6c1d1084-6fe5-4abd-b914-757001c17727"/>

<h1>My Process</h1>
<p>For this particular challenge, I decided to style each page and add functionality before moving on to the next. I wanted to make sure each page was functional on it's own and was mobile responsive. I felt this was a bit more manageable than just styling all the pages at once.</p>
<p>The first thing I did was build out the navigation bar, since that is what shows up on all pages. Then I built the first form page that takes the user's personal information (name, email and phone number). Then I added a buttons component and functions which would allow the user to navigate between each page. I also updated the navigation bar to dynamically update based on which page the user is on. Then I added a form validation function to make sure the inputs were filled out.</p>
<p>After creating the first page, I moved on to the "Select Plan" page. This was an interesting challenge in that I had to create radio inputs and style them to look like cards by hiding the actual radio buttons. I also added a monthly/yearly toggle for the plan. This lets the user choose between a yearly or monthly subscription, with prices being updated dynamically.</p>
<p>Then I moved on the the "Add Ons" page, which was similar to the "Select Plan" page in that I had to create cards that the user can choose from. However, instead of radio buttons, I had to style checkboxes. This is also when I created a new useState to store the pricing changes depending on which plan and add ons the user selected.</p>
<p>Lastly I created the summary page which took all of the useState data that was saved and allowed the user to confirm the choice they made. I also had to update the button functions to show "confirm" on this page. Then I created a static thank you page to wrap things up.</p>

<h2>Built With</h2>
  <ul>
    <li>React+Vite</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>

  <h2>What I learned</h2>
  <p>I learned a lot building out this form. I really got to hone my useState and useEffect knowledge when building this form. I also learned how to dynamically navigate pages with React. This was also really good practice to pass props and functions to other components. Overall, this was a really good challenge to tie all the React knowledge that I've learned so far. </p>

  <h1>Author</h1>
  Ray Mak
  https://www.frontendmentor.io/profile/ray-mak
