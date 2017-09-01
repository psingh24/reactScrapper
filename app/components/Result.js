var React = require("react");
var createReactClass = require('create-react-class');

var Result = createReactClass({


   // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

   // Set the parent to have the search term


    this.props.setId(this.saveInput.value);
  
  },


  render: function() {
    return (
      <div>
      {this.props.results.map((result, i) => {
            return (
               <div key={i} className="test">
                  <div className="panel panel-default">
                      <div className="panel-body">
                          <div className="col-md-2">
                              <p>Upvotes: {result.upvote}</p>
                              
                          </div>
                          <div className="col-md-3">
                              <img width="80%" src={result.image} alt=""/>
                          </div>
                          <div className="col-md-5 title-alignment">
                              <div className="row title-alignment"></div>
                              <div className="row"><p>{result.title}</p></div>
                                <div className="row"></div>
                          </div>
                          <div className="col-md-2">

                              <div className="row btn-row">
                                  <div className="col-md-12">
                                      <button className="btn btn-default result-btn"><a href={result.link} target="_blank">Visit Page</a></button>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-12">
                                       <form onSubmit={this.handleSubmit}>
                                           <input type="hidden" name="save" value={result._id} 
                                                ref={(input) => { this.saveInput = input }} />
                                          <button className="btn btn-default result-btn">Save</button>
                                      </form>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              );
            })}
          </div>
    );
  }
});

module.exports = Result;



