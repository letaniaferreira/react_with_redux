import React from "react";
import { connect } from 'react-redux';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const SongDetail = (props) => {
    console.log(props)
    return <div>Song Detail</div>
};

const mapStateToProps = (state) => {
    return { song: state.SelectedSongReducer }
}

export default connect(mapStateToProps) (SongDetail);
