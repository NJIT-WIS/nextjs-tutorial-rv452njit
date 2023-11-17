import Link from "next/link";
import React, { Component } from "react";
import Date from '../components/date';

//import "../styles/global.css";
class Index extends Component {
  state = {};
  render() {
    return (
        <div id="container" className="layout_container">
        <main>
             <header>
                <h1>Ravisankar Venkataraman</h1>
            </header>   
            <section id="mainsection" className="">
                <p>
                    Having a great time with IS-601
                </p>
            </section>
                <section id="bodysection" className="">
                    <div id="container" className="layout_container" style={{fontSize: "16px"}}>
                        <div id="container" className="layout_container layoutbackgroud">
                            <ul id="listitem">
                                <li>
                                <Link role="link" href={{pathname:`./posts/rendering`, query:{title: 'Server Side Rendering', ids: 1, date: '11/16/2023', description: 'This is Router query with data passed thru link'}}}>When to Use Static Generation v.s. Server-side Rendering</Link>
                                </li>
                                <li>
                                <Link role="link" href={{pathname: './posts/pre-rendering', query:{title: 'Two Forms', ids: 2, date: '11/17/2023', description: 'This is Router query with data passed thru link'}}}>Two Forms of Pre-rendering</Link>
                                </li>
                                <li>
                                <Link role="link" href={'./'}>Local Host</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <article>
                    <div>
                        <Date dateString={Date} />  
                    </div>
                </article>
        </main>
        </div>
    );
  }
}

export default Index;