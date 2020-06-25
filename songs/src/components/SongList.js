import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        console.log(this.props)
        return <div>SongList</div>
    }

}

//the state being passed in the function below if all the data on the redux store
const mapStateToProps = (state) => {

    return { songs: state.songs };

}

export default connect(mapStateToProps) (SongList);
