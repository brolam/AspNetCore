import React from 'react';

export function MovieDelete(
    movie,
    onDeletedMovie = (movie) => {},
    onCancelDeleteMovie = (movie) =>{} 
) {
    console.log("deletedMovie:", movie)
    const deleteConfirm = () => {
        fetch('api/movies/' + movie.id, {
            method: 'DELETE'
        }).then(res => onDeletedMovie(movie))
    }
    
    const divStyle = {
        display: 'block',
      };

    return (
        <div className="modal fade show"  role="dialog" style={divStyle}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Movie</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{movie.title}.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => onCancelDeleteMovie(movie)  }>Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => deleteConfirm()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
