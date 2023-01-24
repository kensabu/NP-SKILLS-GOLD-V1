var scorm = pipwerks.SCORM;

scorm.connection.initialize()

function  doinJSHello()

{

      console.log('checking...');

   //   myGameInstance.SendMessage('ScormManager', 'CallfromJS');

      console.log('checking.....');

   

}

function  getLearnerName()

{

      console.log(999,scorm.data.get("cmi.core.student_name"));

      myGameInstance.SendMessage('DataController', 'ReceiveStudentName',scorm.data.get("cmi.core.student_name"));

}



function  setAsComplete()

{

      scorm.set('cmi.core.lesson_status', 'completed');

      scorm.save();

}



function  setSuspendData(data)

{
      console.log(888,data);
      scorm.set("cmi.suspend_data", data)

      scorm.save();

}



function  setScore(score)

{

      scorm.set("cmi.core.score.raw", score)

      scorm.save();

}

function  getAsComplete()

{

      console.log(999,scorm.data.get("cmi.core.lesson_status"));

      myGameInstance.SendMessage('DataController', 'ReceiveAsComplete',scorm.data.get("cmi.core.lesson_status"));

}



function  getSuspendData()

{

      console.log(999,myGameInstance,scorm.data.get("cmi.suspend_data"));

      myGameInstance.SendMessage('DataController', 'ReceiveSuspendData',scorm.data.get("cmi.suspend_data"));

}
