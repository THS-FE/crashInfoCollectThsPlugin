package cn.com.ths.crash.infocollect;

import android.app.Application;
import android.content.Context;

public class ThsApp extends Application {
    private static ThsApp mInstance = null;
    public static ThsApp getInstance()
    {
        return mInstance;
    }
    @Override
    public void onCreate()
    {
        // TODO Auto-generated method stub
        super.onCreate();
        mInstance = this;
//        if (!Constants.isDebug)
//        {
            CrashHandler crashHandler = CrashHandler.getInstance();
            crashHandler.init(getApplicationContext());
//        }
    }

    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(newBase);
        // api 'com.android.support:multidex:1.0.3'
        MultiDex.install(this);
    }
}
