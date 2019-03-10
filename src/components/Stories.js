import React from 'react';
import './Stories.css';
import Story from './Story';

import { connect } from 'react-redux';
import { getReadableStories, getFetchError } from '../selectors/story';

const COLUMNS = {
    title : {
        label: 'Title',
        width: '40%',
    },
    author: {
        label: 'Author',
        width: '30%',
    },
    comments: {
        label: 'Comments',
        width: '10%',
    },
    points: {
        label: 'Points',
        width: '10%',
    },
    archive: {
        width:'10%'
    }
}

const mapStateToProps = state => ({
    stories: getReadableStories(state),
    error: getFetchError(state),
});

/*const mapDispatchToProps = dispatch => ({
    onArchive: id => dispatch(doArchiveStory(id)),
})*/

const StoriesHeader = ({ columns }) => 
<div className="stories-header">
    { Object.keys(COLUMNS).map(key => 
        <span 
            key={key}
            style={{ width: COLUMNS[key].width }}
        >{COLUMNS[key].label}</span>
    )}
</div>


const Stories = ({ stories, error }) => 
    <div className="stories">
        <StoriesHeader columns={COLUMNS}/>
        { error && <p className="error">Something went wrong</p> }
        {( stories || []).map(story => 
            <Story 
                key={story.objectID}
                story={story}
                columns={COLUMNS} 
            />
        )}
    </div>

export default connect(mapStateToProps)(Stories);