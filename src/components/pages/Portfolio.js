import React from 'react';
import './style.css';

export default function Portfolio() {
    return (
        <div>
          <h2 className="card-title">Portfolio</h2>  
          <section id="work" class="project-boxes">
            <div class="box">
                <a href= "#">
                    <div>
                        <h3>Project 1</h3>
                        <p>Description of the project</p>
                    </div>
                </a>
            </div>
            <div class="box">
                <a href= "#">
                    <div>
                        <h3>Project 2</h3>
                        <p>Description of the project</p>
                    </div>
                </a>
            </div>
            <div class="box">
                <a href= "#">
                    <div>
                        <h3>Project 3</h3>
                        <p>Description of the project</p>
                    </div>
                </a>
            </div>
            <div class="box">
                <a href= "#">
                    <div>
                        <h3>Project 4</h3>
                        <p>Description of the project</p>
                    </div>
                </a>
            </div>
            <div class="box">
                <a href= "#">
                    <div>
                        <h3>Project 5</h3>
                        <p>Description of the project</p>
                    </div>
                </a>
            </div>
        </section>
        </div>
    )
}