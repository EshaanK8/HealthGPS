


var handler = {
    bmi: undefined,
    height: undefined,//in cm
    weight: undefined,//in kg
    age: undefined,
    sex: undefined,
    bmr: undefined,
    activityLevel: undefined,
    cal: undefined,
    goal: undefined
};

var bmiCalc = {

    //Checks if ft is selected to make inches box available

    checkUnits: function () {
        if (document.getElementById("heightUnit").value == "ft") {
            console.log("True");
            document.getElementById("heightInputIn").style.display = 'inline-block';
            document.getElementById("InchesForm").style.display = 'inline-block';
        }

        else {
            console.log("False");
            document.getElementById("heightInputIn").style.display = 'none';
            document.getElementById("InchesForm").style.display = 'none';
        }
    },


    calculateBMI: function () {
        var heightInput = parseFloat(document.getElementById("heightInput").value);
        var heightInputIn = parseFloat(document.getElementById("heightInputIn").value);
        var weightInput = parseFloat(document.getElementById("weightInput").value);

        //Variables
        var heightFt = parseFloat(document.getElementById("heightInput").value);
        var heightIn = parseFloat(document.getElementById("heightInputIn").value);
        var weightLb = parseFloat(document.getElementById("weightInput").value);
        heightIn += (heightFt * 12);//Set Inches to include feet

        console.log(heightFt)
        console.log(heightIn)
        console.log(weightLb)


        if (document.getElementById("heightUnit").value == "ft" && document.getElementById("weightUnit").value == "lb") {
            if ((heightInput >= 1 && heightInput <= 8) && (weightInput >= 15 && weightInput <= 600) && (heightInputIn >= 0 && heightInputIn <= 12)) {
                handler.bmi = ((weightLb / heightIn ** 2) * 703);
                handler.height = heightIn * 2.54;
                handler.weight = weightLb * 0.453592;
                bmiCalc.printBMI();
            }

            else {
                handler.bmi = 0;
            }
        }

        if (document.getElementById("heightUnit").value == "cm" && document.getElementById("weightUnit").value == "kg") {
            if ((heightInput >= 30 && heightInput <= 245) && (weightInput >= 6 && weightInput <= 275)) {
                handler.bmi = (weightLb / (heightFt ** 2) * 10000);
                handler.height = heightIn;
                handler.weight = weightLb * 0.453592;
                bmiCalc.printBMI();
            }

            else {
                handler.bmi = 0;
            }
        }

        if (document.getElementById("heightUnit").value == "ft" && document.getElementById("weightUnit").value == "kg") {
            if ((heightInput >= 1 && heightInput <= 8) && (weightInput >= 6 && weightInput <= 275) && (heightInputIn >= 0 && heightInputIn <= 12)) {
                handler.bmi = ((weightLb * 2.20462 / heightIn ** 2) * 703);
                handler.height = heightIn * 2.54;
                handler.weight = weightLb;
                bmiCalc.printBMI();
            }

            else {
                handler.bmi = 0;
            }

        }

        if (document.getElementById("heightUnit").value == "cm" && document.getElementById("weightUnit").value == "lb") {
            if ((heightInput >= 30 && heightInput <= 245) && (weightInput >= 15 && weightInput <= 600)) {
                handler.bmi = ((weightLb * 0.453592 / (heightFt ** 2) * 10000));
                handler.height = heightIn;
                handler.weight = weightLb;
                bmiCalc.printBMI();
            }

            else {
                handler.bmi = 0;
            }
        }

        //Set to local storage//

        window.localStorage.setItem('bmi', handler.bmi);
        window.localStorage.setItem('height', handler.height);
        window.localStorage.setItem('weight', handler.weight);
    },


    checkValidInput: function () {
        var heightInput = parseFloat(document.getElementById("heightInput").value);
        var heightInputIn = parseFloat(document.getElementById("heightInputIn").value);
        var weightInput = parseFloat(document.getElementById("weightInput").value);

        //Check Height Box Valid Input//
        if (heightInput) {
            debugger;
            if ((document.getElementById("heightUnit").value == "ft")) {
                if ((heightInput >= 1 && heightInput <= 8)) {
                    document.getElementById("heightErrorLabel").innerHTML = "";
                    document.getElementById("heightInput").style.borderColor = "";

                }

                else {
                    document.getElementById("heightInput").style.borderColor = "red";
                    document.getElementById("heightErrorLabel").innerHTML = "Must be between 1 and 8";
                }

            }

            else if ((document.getElementById("heightUnit").value == "cm")) {
                if ((heightInput >= 30 && heightInput <= 245)) {
                    document.getElementById("heightErrorLabel").innerHTML = "";
                    document.getElementById("heightInput").style.borderColor = "";
                }

                else {
                    document.getElementById("heightInput").style.borderColor = "red";
                    document.getElementById("heightErrorLabel").innerHTML = "Must be between 30 and 245";
                }
            }
        }

        else {
            document.getElementById("heightInput").style.borderColor = "red";
            document.getElementById("heightErrorLabel").innerHTML = "Invalid input";
        }



        //Check Inches Box Valid Input//

        if (heightInputIn) {

            if (document.getElementById("heightUnit").value == "ft") {
                if ((heightInputIn >= 0 && heightInputIn <= 12)) {
                    document.getElementById("heightErrorLabel").innerHTML = "";
                    document.getElementById("heightInput").style.borderColor = "";                }

                else if ((heightInputIn <= 0 || heightInputIn >= 12)) {
                    document.getElementById("heightInputIn").style.borderColor = "red";
                    document.getElementById("heightInErrorLabel").innerHTML = "Must be between 0 and 12";
                }
            }

            else if (document.getElementById("heightUnit").value == "cm") {
                document.getElementById("heightErrorLabel").innerHTML = "";
                document.getElementById("heightInput").style.borderColor = "";
            }
        }

        else {
            if (document.getElementById("heightUnit").value == "ft") {
                document.getElementById("heightInputIn").style.borderColor = "red";
                document.getElementById("heightInErrorLabel").innerHTML = "Invalid input";
            }

            else if (document.getElementById("heightUnit").value == "cm") {
                document.getElementById("heightInErrorLabel").innerHTML = "";

            }
        }

        //Check Weight Box Valid Input//

        if (weightInput) {

            if ((document.getElementById("weightUnit").value == "lb")) {
                if ((weightInput >= 15 && weightInput <= 600)) {
                    document.getElementById("heightErrorLabel").innerHTML = "";
                    document.getElementById("heightInput").style.borderColor = "";                }

                else {
                    document.getElementById("weightInput").style.borderColor = "red";
                    document.getElementById("weightErrorLabel").innerHTML = "Must be between 15 and 600";
                }
            }

            if ((document.getElementById("weightUnit").value == "kg")) {
                if ((weightInput >= 6 && weightInput <= 275)) {
                    document.getElementById("heightErrorLabel").innerHTML = "";
                    document.getElementById("heightInput").style.borderColor = "";
                }

                else {
                    document.getElementById("weightInput").style.borderColor = "red";
                    document.getElementById("weightErrorLabel").innerHTML = "Must be between 6 and 275";
                }
            }
        }

        else {
            document.getElementById("weightInput").style.borderColor = "red";
            document.getElementById("weightErrorLabel").innerHTML = "Invalid input";
        }
    },

    removeLabel: function () {
        document.getElementById("heightInErrorLabel").innerHTML = "";
    },

    printBMI: function () {
        if (isNaN(handler.bmi)) {
            console.log("undefined");
            document.getElementById("heightInput").style.color = "none";
            document.getElementById("weightInput").style.color = "none";
            document.getElementById("heightInputIn").style.color = "none";
        }

        else {
            console.log("good");
            document.getElementById('bmiOutput').innerHTML = "Your bmi is " + handler.bmi.toFixed(1);
        }
    },

    moveArrow: function () {
        var img = document.getElementById('scaleImg');
        var width = 0.77 * (img.clientWidth);
        var elem = document.getElementById("arrow");
        var pos = 0;
        var id = setInterval(frame, 5);
        var bmi = handler.bmi;

        function frame() {
            if (bmi > 15 && bmi < 40) {
                if (pos == parseInt((width / 25 * bmi) - (15 * (width / 25)))) {
                    clearInterval(id);
                }

                else {
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }

            else if (bmi <= 15) {
                if (pos == 0) {
                    clearInterval(id);
                }

                else {
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }

            else if (bmi >= 40) {
                if (pos == parseInt((width / 25 * 40) - (15 * (width / 25)))) {
                    clearInterval(id);
                }

                else {
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }

            else {
                if (pos == 0) {
                    clearInterval(id);
                }

                else {
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }
        }

    },

    nextBtn: function () {
        if (isNaN(handler.bmi)) {
            window.location.href = "#";
        }

        else if (handler.bmi <= 0 || handler.bmi >= 2929.2) {
            window.location.href = "#";
        }

        else {
            window.location.href = "calorieCalc.html";
        }
    },

    isNumberKey: function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

        return true;
    }

};


var calorieCalc = {
    height: localStorage.getItem("height"),
    weight: localStorage.getItem("weight"),
    bmr: localStorage.getItem("bmr"),
    cal: localStorage.getItem("cal"),

    calculateCalories: function () {
        var activityLevel = document.getElementById("alOption").value;
        var goal = document.getElementById("goalOption").value;

        if (activityLevel == "sedentary") {
            this.cal = this.bmr * 1.2;
        }

        else if (activityLevel == "light") {
            this.cal = this.bmr * 1.375;
        }

        else if (activityLevel == "moderate") {
            this.cal = this.bmr * 1.465;
        }

        else if (activityLevel == "active") {
            this.cal = this.bmr * 1.55;
        }

        else if (activityLevel == "veryActive") {
            this.cal = this.bmr * 1.7252;
        }

        else if (activityLevel == "extraActive") {
            this.cal = this.bmr * 1.9003;
        }

        if (goal == "loseWeight") {
            this.cal -= 0.10 * this.cal;
            handler.cal = this.cal;
            window.localStorage.setItem('cal', handler.cal);
            this.printCalories();

        }

        else if (goal == "maintenance") {
            handler.cal = this.cal;
            window.localStorage.setItem('cal', handler.cal);
            this.printCalories();
        }

        else if (goal == "gainWeight") {
            this.cal += 0.10 * this.cal;
            handler.cal = this.cal;
            window.localStorage.setItem('cal', handler.cal);
            this.printCalories();
        }
    },

    calculateBMR: function () {
        var age = parseFloat(document.getElementById("ageInputSmall").value);
        var sex = document.getElementById("sexOption").value;

        if (sex == "male") {
            this.bmr = (10 * this.weight) + (6.25 * this.height) - (5 * age) + 5;
            handler.bmr = this.bmr;
            window.localStorage.setItem('bmr', handler.bmr);
            this.printBMR();
        }

        if (sex == "female") {
            this.bmr = (10 * this.weight) + (6.25 * this.height) - (5 * age) - 161;
            handler.bmr = this.bmr;
            window.localStorage.setItem('bmr', handler.bmr);
            this.printBMR();

        }
        //Set to local storage
        window.localStorage.setItem('age', handler.age);
        window.localStorage.setItem('sex', handler.sex);
        window.localStorage.setItem('bmr', handler.bmr);
        window.localStorage.setItem('cal', handler.cal);
    },

    printBMR: function () {
        if (isNaN(handler.bmr)) {
            console.log("undefined");
            document.getElementById('bmrOutputText').innerHTML = "Please enter valid data";
            document.getElementById('bmrOutput').innerHTML = "";
            document.getElementById('calorieOutputText').innerHTML = "";
            document.getElementById('calorieOutput').innerHTML = "";
        }

        else {
            console.log("good");
            document.getElementById('bmrOutputText').innerHTML = "Your Basal Metabolic Rate (BMR) is: ";
            document.getElementById('bmrOutput').innerHTML = handler.bmr.toFixed(0) + " calories per day";
        }
    },

    printCalories: function () {
        if (isNaN(handler.cal)) {
            console.log("undefined");
            document.getElementById('bmrOutputText').innerHTML = "Please enter valid data";
            document.getElementById('bmrOutput').innerHTML = "";
            document.getElementById('calorieOutputText').innerHTML = "";
            document.getElementById('calorieOutput').innerHTML = "";
        }

        else {
            console.log("good");
            document.getElementById('calorieOutputText').innerHTML = "Based on your goal, your daily calorie intake should be: ";
            document.getElementById('calorieOutput').innerHTML = handler.cal.toFixed(0) + " calories per day";
        }
    },



    //Check Age Box Valid Input//
    checkValidInputAge: function () {
        var ageInput = parseFloat(document.getElementById("ageInputSmall").value);

        if (ageInput) {

            if ((ageInput >= 2 && ageInput <= 110)) {

            }

            else {
                document.getElementById("ageInputSmall").style.borderColor = "red";
                document.getElementById("ageErrorLabel").innerHTML = "Must be between 2 and 110";
            }
        }

        else {
            document.getElementById("ageInputSmall").style.borderColor = "red";
            document.getElementById("ageErrorLabel").innerHTML = "Invalid input";
        }
    }

};



















