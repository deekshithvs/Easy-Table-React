# Easy-Table-React
<h3><b>A Simple component which will generates Table data automatically based based on the data passed and table configuration</h3>
<br><br> Component also includes inbuild sorting ability.
 
 <br><br>
 <b>Data Format<b>
 <format>
   headers : {
       columns: [{
          accessor: "column name", //key wich is used to access data from data list
          displayName: "Name",  //header display name
          id: "name",
          contanerClassName: "bg-danger", //class for individual column container
          type: "string"  //type of column. Supported types ["number", "date", "string"]
       }],
      meta: {
          columnContainerClass: "test class" //class for entire coulmns container
      }
   }
   
   data: [
            {
              accessor1: "test _1",
              accessor2: "test _2",
              accessor3: "test _3",
              accessor4: "test _4",
            }
            .
            .
          ]
</format>
