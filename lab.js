// CHAPTER ONE //
alert("You are unemployed, contemplating on whether to book yet another holiday. You come across a job ad for sparta global.");

var application_choice = prompt("Will you send in your application or book a holiday instead?: (1) Apply (2) I don't need a job");

if (application_choice == 1) {
  alert ("2 days later, you get a phone call from Sparta Global");
} else {
  alert ("You blow through your money and become homeless two weeks later");
  throw "BadChoiceError"
}

// CHAPTER TWO //
alert ("You proceed to carry out your phone interview")

var phone_choice = prompt("How will you act on the phone?: (1) Professional (2) Hang up mid conversation  (3) Throw insults ");

if (phone_choice == 1) {
  alert("You have been invited to Sparta day");
} else if (phone_choice = 2) {
  alert("You use all your money and become homeless");
  throw "RudeError";
} else {
  alert("How rude!");
  throw "RudeError"
}

// CHAPTER THREE //
alert ("You arrive at Sparta Day and see the other applicants.")

var spartaday_choice = prompt("How do you act?: (1) Act like you're better than them throughout the group activities (2) Be nice and work well with eachother  (3) Mainly keep to yourself, contribute when you must" );

if (spartaday_choice == 2 || spartaday_choice == 3) {
  alert("You've passed this stage and have been sent 4 psychometric tests");
} else {
  alert("Uh, the interviewers don't think you're a good fit for their company")
  throw "OffensiveError";
}


// CHAPTER FOUR //
alert ("You sit down and look at the email you've been sent for your tests")

var test_choice = prompt("You have a deadline of 12pm. How do you approach these tests?: (1) Do a few practice tests, and then attempt (2) Go straight into the tests  (3) Wait until 11:30am to start your tests  (4) Don't do any of the tests" );

switch (test_choice) {
  case '1':
  alert("You did exceptionally well, you've PASSED");
  break;
  case '2':
  alert("You got a good mark overall, you've PASSED");
  break;
  case '3':
  alert("You ended up completing your tests late. You've FAILED");
  break;
  default:
  alert("FAIL");
}
