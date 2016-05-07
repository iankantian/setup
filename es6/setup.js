/**
 * Created by joshuabrown on 5/6/16.
 */

'use strict';

(function () {
    function* rainbow(){
        yield 'red';
        yield 'orange';
    }
    for( let color of rainbow() ){
        console.log( color );
    }

    class ConfigState { // using class to remove need for a globals
        constructor() {
            this.httpRequest = {};
            this.setup = {};
        }
        get_http_request() {
            return this.httpRequest;
        }
        set_http_request( httpRequest ) {
            this.httpRequest = httpRequest;
        }
        get_setup() {
            return this.setup;
        }
        set_setup( setup ) {
            console.log( setup );
            this.setup = JSON.parse( setup );
            return this.setup;
        }
        log_setup() {
            console.log(`setup object is ${ this.setup }`);
        }
        log_objects(){
            console.log('enumerable objects');
            for( let obj in this.setup ){
                if( this.setup.hasOwnProperty( obj ) === true ){
                    console.log( obj );
                }
            }
        }
    }

    class VendriConfigState extends ConfigState {
        constructor() {
            super();
        }
        log_targets(){
            let { platforms, creatives, campaigns, triggers } = this.setup;
            console.log( 'platforms are', platforms );
            console.log( 'creatives are', creatives );
            console.log( 'campaigns are', campaigns );
            console.log( 'triggers are', triggers );
        }
        map_targets(){
            //let { platforms, creatives, campaigns, triggers } = this.setup;
        }
    }

    let my_config = new VendriConfigState();

    document.addEventListener( 'DOMContentLoaded', function () {
        makeRequest( 'server.php' );
    });

    function makeRequest(url) {
        my_config.set_http_request( new XMLHttpRequest() );
        let httpRequest = my_config.get_http_request();
        if ( !httpRequest ) {
            console.warn( 'Could not create XMLHTTP instance' );
            return false;
        }
        httpRequest.onreadystatechange = getConfig;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function getConfig() {
        let httpRequest = my_config.get_http_request();
        if ( httpRequest.readyState === XMLHttpRequest.DONE ) {
            if ( httpRequest.status === 200 ) {
                my_config.set_setup( httpRequest.responseText );
                //my_config.log_targets();
                my_config.log_objects();
            } else {
                alert( 'There was a problem with the request.' );
            }
        }
    }

})();