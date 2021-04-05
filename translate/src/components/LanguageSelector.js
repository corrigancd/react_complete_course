import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component { 
    static contextType = LanguageContext;
    render() {
       return ( <div>
        Select a language:
        <i
          className="flag ie"
          onClick={() => this.context.onLanguageChange("english")}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        ></i>
      </div>);
    }
}

export { LanguageSelector };