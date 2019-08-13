#!/usr/bin/env node
const fs = require('fs'),
path = require('path');
module.exports = function(context) {
 
  const platformRoot = path.join(context.opts.projectRoot, 'platforms/android');
  
  
  const manifestFile = path.join(platformRoot, 'AndroidManifest.xml');
  
    if (fs.existsSync(manifestFile)) {
  
      fs.readFile(manifestFile, 'utf8', function (err,data) {
        if (err) {
          throw new Error('Unable to find AndroidManifest.xml: ' + err);
        }
  
        const appClass = 'cn.com.ths.crash.infocollect.ThsApp';
  
        if (data.indexOf(appClass) == -1) {
  
          const result = data.replace(/<manifest/g,'<manifest xmlns:tools="http://schemas.android.com/tools"').replace(/<application/g, '<application tools:replace="android:name" android:name="' + appClass + '"');
    
          fs.writeFile(manifestFile, result, 'utf8', function (err) {
            if (err) throw new Error('Unable to write into AndroidManifest.xml: ' + err);
          })
        }
      });
    }
  
  
  };