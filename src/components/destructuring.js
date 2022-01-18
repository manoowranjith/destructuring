import './destructuring.css'
const Destructuring = ()=>{
    const userResponse = 
    {
        userName : 'test',
    }

    const Marks = [100,90,80,100,59]

    function getUserIpDetails({userName, UserIp ="0.0.0.0"})
    {
       return(
        //    <h1>[{userName} : {UserIp}]</h1>
           [userName," : ",UserIp]
       )
    }

    function studentMarks([one,two,three])
    {
       return(
           [one,two,three]
       )
    }

    return(
        <div className="destructuring" >
            <div>
                <h1>getUserIpDetails()</h1>
                <h2 className="user">{getUserIpDetails(userResponse)}</h2>
            </div>
            <div>
                <h1>studentMarks()</h1>
                <div className="user student">
                    {studentMarks(Marks).map(mark =><h2>{mark}</h2>)}
                </div>
            </div>
        </div>
    );
}
export default Destructuring;