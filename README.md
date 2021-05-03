# Analytics Web Frontend Pipeline

GitHub repo to host the Analytics Web Frontend Pipeline using Jupyter Noterbook, MongoDB and HTML/CSS/JS stack.

## Design Overview

This Dashboard App has three main components.
![alt text](https://github.com/hershdhillon/Centro-Delivery-Parsing-Solution/blob/50c5a6fd3683cf79192881fc38fe83ff5a567f96/Front-End/resources/images/Design%20Architecture%20Diagram.png)

* Jupyter Notebook - For data parsing and further analysis I used jupyter notebook with IPython shell and Pandas library. The interactive flow and performant pandas library enabled a quick and effective data modelling solution. 
* MongoDB Atlas - To store my modelling output, I used MongoDB as the document storage. The ease of access and retrieval of the collections guided this decision. MongoDB was also used to visualize the collection data using MongoDB Charts.
* HTML/CSS/JS - For the Dashboard Front-End, I used plain HTML/CSS/JS stack to quickly display the data incoming from the remote MongoDB Database.

## Usage

1. The Dashboard App can be accessed from this [link](https://main.d19829dc7ci9hs.amplifyapp.com/ "Impressions Analytics"), deployed on AWS Amplify.
2. The App can also be opened on a local browser from the source file present in Front-End folder. Clone the Repo using,
   ```sh
   git clone https://github.com/hershdhillon/Analytics-Web-Frontend-Pipeline.git
   ```

## Testing

Jest Framework is used to build automated testing cases for this app. The tests are focussed on the remote database connectivity, integrity of the data and the UI elements present on the dashboard app.

To run the testing, 

1. Shell into the Testing folder.
2. Install the required modules
   ```sh
   npm install
   ```
3. Run the testing suite
   ```sh
   npm test
   ```
