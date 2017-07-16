import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx'
import Results from './quiz/Results.jsx'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      questions:[
        {
          id:1,
          text:'Which is the best-selling book of all time?',
          choices:[
            {
              id:'a',
              text:'Lord of the Rings - J.R.R. Tolkien'
            },
            {
              id:'b',
              text:'Don Quixote - Miguel de Cervantes'
            },
            {
              id:'c',
              text:'Harry Potter and the Philosopher Stone - J.K. Rowling'
            },
          ],
          correct: 'b'
        },
        {
          id:2,
          text:'Which is the best-selling digital single?',
          choices:[
            {
              id:'a',
              text:'Ed Sheeran - Thinking out loud'
            },
            {
              id:'b',
              text:'Wiz Khalifa ft. Charlie Puth - See you again'
            },
            {
              id:'c',
              text:'Robin Thicke ft. T.I. and Pharrell - Blurred Lines'
            },
          ],
          correct: 'b'
        },
        {
          id:3,
          text:'What is the most popular soft drink?',
          choices:[
            {
              id:'a',
              text:'Dr.Pepper'
            },
            {
              id:'b',
              text:'Pepsi Cola'
            },
            {
              id:'c',
              text:'Coca-Cola'
            },
          ],
          correct: 'c'
        },
        {
          id:4,
          text:'Which actor played Obi Wan Kenobi in Star Wars movie?',
          choices:[
            {
              id:'a',
              text:'Ewan McGregor'
            },
            {
              id:'b',
              text:'Liam Neeson'
            },
            {
              id:'c',
              text:'Michael Keaton'
            },
          ],
          correct: 'a'
        },
      ],
      score: 0,
      current:1

    }
  }
  setCurrent = current =>{
    this.setState({
      current
    })
  }
  setScore = score =>{
    this.setState({
      score
    })
  }
    render(){
      if(this.state.current > this.state.questions.length){
        var scorebox = '';
        var results = <Results {...this.state}/>
      }else{
        var scorebox = <Scorebox {...this.state}/>
        var results = '';

      }
      return <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent} setScore={this.setScore}/>
                {results}
              </div>
    }
}




export default App
