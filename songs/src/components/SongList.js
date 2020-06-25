import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <buton className="ui button primary">
                            Select
                        </buton>
                    </div>
                    <div className="content">{song.title}</div>

                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }

}

//the state being passed in the function below if all the data on the redux store
const mapStateToProps = (state) => {

    return { songs: state.songs };

}

export default connect(mapStateToProps) (SongList);
