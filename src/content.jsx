import React from "react";
import {connect} from "react-redux";
import { Images } from "./Components/Images"


// const Content = () => {
//     const [likeCount,like] = useState(0);
//     // const like = () =>{
//     //     return ++likeCount;
//     // };
//     return (
//         <div className = "halfScreen">
//             {likeCount}
//             <button className="likebutton"onClick = {() => like(likeCount+1)}>Like</button>
//             {/* Hello World */}
//         </div>
//     );
// };

class Content extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         count:0     
    //     };
    // }

    // componentDidMount()
    // {
    //     console.log("componeneDidMount is called now ....")
    // }

    // like = (callBack,value) => {
    //     const {
    //         state: {count}
    //     } = this;
    //     this.setState({
    //         count:count + 1
    //     }, ()=>{                                     //Calling callback only when number of vote increases
    //         callBack(value+1);
    //     });
    // };

    render()
    {
        // const { count } = this.state;
        // const { index,totalVoteFn,totalVote,votes } = this.props;
        const {index,votes:{poll:votes},totalVoteFn} = this.props;
        let count = votes ? votes.reduce((a,b) => a+b,0):0;
        let currentVote = votes[index] ? votes[index] : 0;
        // console.log("Redux is ...",count,votes);
        // totalVoteFn(count);


        return (
            <div className="halfScreen" style={index&1?{}:{borderColor: "#ff0000"}}>
                {currentVote}
                <Images index = {index} like = {() => this.props.setVote(index,currentVote + 1)} />
                <button onClick={() => totalVoteFn(count)}>Add to Cart</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({votes: state.votes});

const mapDispatchToProps = dispatch => {
    return{
        setVote: (index,vote) => dispatch( {type:'CAST_VOTE',index,vote} )
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Content);