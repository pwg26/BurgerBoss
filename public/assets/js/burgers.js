// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE/devour
  const changeSleepBtns = document.querySelectorAll(".devour-burger");

  // Set up the event listener for the create button
  if (changeSleepBtns) {
    changeSleepBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const newSleep = e.target.getAttribute("data-newsleep");

        const newSleepState = {
          sleepy: newSleep,
        };

        fetch(`/api/cats/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newSleepState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed sleep to: ${newSleep}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  // CREATE burger
  const createBurgerBtn = document.getElementById("create-burger");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grabs the value of the textarea
      const newBurger = {
        name: document.getElementById("entry").value.trim(),
      };

      // Send POST request to create a new burger
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById("entry").value = "";

        // Reload the page so the user can see the new burger
        console.log("New burger ready to be devoured!");
        location.reload();
      });
    });
  }

  // DELETE
  // const deleteCatBtns = document.querySelectorAll(".delete-cat");

  // // Set up the event listeners for each delete button
  // deleteCatBtns.forEach((button) => {
  //   button.addEventListener("click", (e) => {
  //     const id = e.target.getAttribute("data-id");

  //     // Send the delete request
  //     fetch(`/api/cats/${id}`, {
  //       method: "DELETE",
  //     }).then((res) => {
  //       console.log(res);
  //       console.log(`Deleted cat: ${id}`);

  //       // Reload the page
  //       location.reload();
  //     });
  //   });
  // });
});
