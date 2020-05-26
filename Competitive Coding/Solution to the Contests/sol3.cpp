#include<bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin>>s;
    int len = s.length();

    set<char> ans;

    for(int i = 0; i<len; i++)
    {
       ans.insert(s[i]); 
    }
    int ans_length = ans.size(); 

    cout<< ans_length<<endl;



    if(ans_length%2 == 0)
    {
        cout<<"CHAT WITH HER!";
    }
    else
    {
        cout<< "IGNORE HIM!";
    }
    
    return 0;
}