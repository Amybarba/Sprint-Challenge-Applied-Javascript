// Step 2: Create Tabs
// -----------------------
// X Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// X Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    console.log('Abra Cadabra Amy', data);
    
})



// .catch(err => {
//     console.log('Error:', err);

// });

// const tabs = document.querySelector('.tab');

// const topicsArray = [
//     "javascript",,
//     "bootstrap",
//     "technology",
//     "jquery",
//     "node.js" 
// ]


