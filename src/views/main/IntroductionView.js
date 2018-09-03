import React from 'react';
import Emoji from '../../components/emoji';

export default () => (
  <section>
    <article className='pb4'>
      <div className='ph3 ph5-ns'>
        <div className='cf mw9 center tc-m'>
          <div className='mt4 pt4 pb3 pb4-ns pt6-ns pb6-ns black fl-l w-50-l'>
            <h1 className='f4 fw6 f1-ns lh-title measure'>
              Hey there! <Emoji symbol='👋'/>
            </h1>
            <p className='f3 f3-ns fw6 b measure dib-m lh-copy'>
              Great to meet you <Emoji symbol='🌈'/><br/>
              My name's Lucas Johnston.<br/>
              I’m a Software Engineer & Product Manager from London,<br/>
              currently working for <a style={{textDecoration: 'underline'}} className='black dim' href='https://www.starlingbank.com'>Starling Bank</a>.<br/>
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
);