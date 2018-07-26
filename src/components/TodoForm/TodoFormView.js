import React from 'react';

export default ({ onChange, onSubmit, title, responsible, description, priority }) => (
    <div className="col">
        <h4>Form Todo</h4>

        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title" className="text-muted">
                    <small>Title</small>
                </label>
                <input type="text" name="title" value={title} onChange={onChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="responsible" className="text-muted">
                    <small>Responsible</small>
                </label>
                <select name="responsible" id="responsible" value={responsible} onChange={onChange} className="form-control">
                    <option>Wesley Willian</option>
                    <option>Luiz Carlos</option>
                    <option>Victor Lima</option>
                    <option>Erik Fig</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="description" className="text-muted">
                    <small>Description</small>
                </label>
                <textarea name="description" id="description" value={description} onChange={onChange}  className="form-control" cols="30" rows="10"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="priority" className="text-muted">
                    <small>Priority</small>
                </label>
                <select name="priority" id="priority" value={priority} onChange={onChange} className="form-control">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
)