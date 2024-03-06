## Walkthroughs

### Displaying content with data attributes and CSS pseudo elements

+ #### Code Breakdown:

  ```js
  const toggleSection = (section) => {
    activeSection.value = section
    const choiceArray = document.querySelectorAll(".choice")
    choiceArray.forEach((card) => {
      card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
          element.classList.remove("expand", "unset")
          element.classList.add('small')
          element.setAttribute("data-text", element.querySelector(".card-header").textContent)
        })
        card.classList.remove("small")
        card.classList.add('expand')
      });
    });
  }
  ```
    + ⚠️ <small>*Reference `/client/src/components/Services.vue` component to see this function being implemented. Then we will break down the code to understand how it works*</small> ⚠️


+ #### Now let's break down the markup that gets rendered by breaking down the function's implementation:

  ```js
  const choiceArray = document.querySelectorAll(".choice")
    choiceArray.forEach((card) => {
      card.addEventListener("click", () => {
        element.classList.remove("expand", "unset")
  ```
+ #### *`element.classList.remove("expand", "unset")`* collapses all cards by removing the `expand` class which enlarges the card and the `unset` class which sets the card to its default size. This is done to ensure that only one card is expanded at a time.


  ```js
  element.classList.add('small')
  ```
+ #### Adds the `small class` to all `inactive` cards which styles all cards to be the same size when `collapsed`.


  ```js
  element.setAttribute("data-text", element.querySelector(".card-header").textContent)
  ```
+ #### Creates element attribute `data-text` to use the text of the card header class `using the Node.textContent property`, we use CSS to display this text on the card with the ::after pseudo-element's `content` property with a value of `attr(data-text)`, which is a CSS function that returns the value of the specified attribute of the selected element (in this case, we called the element attribute `data-text`).

+ #### `attr()` is a CSS function that `returns the value of the specified attribute of the selected element` (in this case, we called the element attribute `data-text`). A visual of the HTML markup that gets rendered is shown below for one of the iterated cards:
  ```html
  <div class="card choice unset small planning-icon" style="background-color: rgb(117, 200, 174); background-image: url(/src/assets/img/hand-heart-icon.png);">
    <span class="card-header2 fs-2 text-capitalize">planning</span>
    <div class="card-header fs-2 text-capitalize" data-text="planning"> <!-- 🔖 data-text we created referencing Node.textContent property -->
      planning <!-- 🔖 the Node.textContent is the text content you provide within your element -->
    </div>
  </div>
  ```

+ #### 🔖 IMPORTANT NOTE: `planning` is the text content, which you can access using `querySelector(".querying-this-class").textContent` and setting the value for the forementioned `attr()` CSS function like this:
  ```scss
  .card::after {
    content: attr(data-text);
  }
  ```
+ We are using `data-text attribute` to display the card header text on the card with the `::after pseudo-element` 🔖. This is why you see the text `planning` displayed 90 degrees to the side of the `inactive cards that currently have the small class added.`
  - ***`It is completely free to style without effecting any of your other applied card styles.`***