function validateForm() {
    var fname = document.forms["bookingform"]["fName"].value;
    var lname = document.forms["bookingform"]["lName"].value;
    var email = document.forms["bookingform"]["email"].value;
    var phone = document.forms["bookingform"]["phone"].value;
    var whofor = document.forms["bookingform"]["whofor"].value;

    if (fname == "") {
        alert("First name must be filled out");
        return false;
    }

    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (phone == "") {
        alert("Phone No. must be filled out");
        return false;
    }

    if (whofor == "") {
        alert("Please tell us who you're booking for");
        return false;
    }
}