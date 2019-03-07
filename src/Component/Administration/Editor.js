import React, {Component} from 'react';
import GEditor from 'grapesjs';
import grapejsFirestore from 'grapesjs-firestore';
import 'grapesjs/dist/css/grapes.min.css';
 
class Editor extends Component {

    componentDidMount() {
        console.log(GEditor);
        console.log(this.el);
        var editor = GEditor.init({
            container: this.el,
            fromElement: true,
            plugins: [grapejsFirestore],
            pluginsOpts: {
                'grapesjs-firestore': {
                    docId: 'grapejs',
                    apiKey: 'AIzaSyB9RHyTzE5_atO2XDVGOFi5fNa52-Lpz6Q',
                    authDomain: 'lily-site.firebaseapp.com',
                    projectId: 'lily-site',
                }
            }
        });
        console.log(editor.Panels.getPanel('options'))
    }

    render() {
        return <div ref={el=>this.el=el} />;
    }
}
 
export default Editor;