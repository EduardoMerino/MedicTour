console.log("hola");
  $(document).ready(function(){

    //variables for the form
    var ailment = "";
    var specialty = "";
    var hospital = "nada";
    var concierge = true;
    var fname = "";
    var lname = "";
    var email = "";
    var phone = "";
    var birthdate = "";
    var gender = "";
    var country = "";
    var apiPath = "http://localhost:8080/api/";
    var specialityId;
    var medicsArr;

    //get Jsons
    var medicsJson, specialitiesJson, patientsJson;
    $.getJSON(apiPath+"medic", function(json){
      medicsJson=json;
    });
    $.getJSON(apiPath+"speciality", function(json){
      specialitiesJson=json;
    });
    $.getJSON(apiPath+"patient", function(json){
      patientsJson=json;
    });

    //search json function
    function getObjects(obj, key, val) {
      var objects = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
          objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
          objects.push(obj);
        }
      }
      return objects;
    }

    //medics query
    function medicsQuery(json, specialityId, hospitalId){
      return getObjects(getObjects(json, "speciality_id", specialityId), "hospital_id", hospitalId);
    }

    //load specialities
    for(var e in specialitiesJson){
      $("<option value='"+e._id+"'>"+ e.name +"</option>").appendTo("#speciality");
    }

    //First: hide all divs:
    $("#hospital").hide();
    $("#details").hide();
    $("#concierge").hide();
    $("#form").hide();
    //hide all Hospitals-detail
    $("#detail-sur").hide();
    $("#detail-zapopan").hide();
    $("#detail-ambulatoria").hide();
    $("#detail-tepic").hide();
    $("#detail-colima").hide();

    //get ailment
    $("#ailment").on("keyup change", function() {
      ailment = this.value;
      $("#dom_element").text(this.value);
    });

    //On button clicks, show the correct div and get hospital
    $("#show-hospital").click(function(){
      $("#hospital").show();
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
      //get specialty
      var select =  document.getElementById('speciality');
      specialityId = select.options[select.selectedIndex].value;
    });
    $(".show-details").click(function(){
      $("#details").show();
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });
    $("#show-concierge").click(function(){
      $("#concierge").show();
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });
    $("#show-form").click(function(){
      $("#form").show();
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
      //get concierge variable
      var bar = $("input[name='radio-concierge']:checked").val();
      if(bar == "TRUE"){
        concierge = true;
      }else{
        concierge = false;
      }
    });

    //show correct hospital details
    $("#show-detail-sur").click(function(){
      //change name
      $("#name-hospital").text("Centro Médico Puerta de Hierro Sur");
      $("#dir-hospital").text("Tlajomulco de Zúñiga, Jalisco, México");
      //change description
      $("#description-hospital").text("The Puerta de Hierro Sur Medical"+
      " Center began operations in June 2009, distinguishing itself as a "+
      "Specialty Hospital with a specialized medical corps focused on"+
      " providing a diagnosis and timely treatment for the benefit of the"+
      " community faithful to the line that has pursued since the founding"+
      " of Medical Group Puerta de Hierro.");
      //show detail
      $("#detail-sur").show();
      $("#detail-zapopan").hide();
      $("#detail-ambulatoria").hide();
      $("#detail-tepic").hide();
      $("#detail-colima").hide();
      //save on variable
      hospital = "588ab9fb00dff2cb2bfeedc8";
      //get correct medics to show
      medicsArr = medicsQuery(medicsJson, hospital, specialityId);
    });
    $("#show-detail-zapopan").click(function(){
      //change name
      $("#name-hospital").text("Centro Médico Puerta de Hierro");
      $("#dir-hospital").text("Zapopan, Jalisco, México");
      //change description
      $("#description-hospital").text("At the Puerta de Hierro Medical "+
      "Center, we began operations in May 2006, distinguishing ourselves "+
      "from our foundation as a Specialty Hospital, made up of a specialized"+
      "medical team focused on providing a diagnosis and treatment for the"+
      " benefit of the community, under the firm belief that his life is our"+
      " vocation. At Puerta de Hierro Medical Center we have the recognition"+
      " of the General Health Council, a federal health authority for the "+
      "compliance of national and international standards in safety, medical"+
      " care, hospital infrastructure and current regulations.");
      //show detail
      $("#detail-sur").hide();
      $("#detail-zapopan").show();
      $("#detail-ambulatoria").hide();
      $("#detail-tepic").hide();
      $("#detail-colima").hide();
      //save on variable
      hospital = "588ab95800dff2cb2bfeedc5";
      //get correct medics to show
      medicsArr = medicsQuery(medicsJson, hospital, specialityId);
    });
    $("#show-detail-ambulatoria").click(function(){
      //change name
      $("#name-hospital").text("Centro de Cirugía Ambulatoria");
      $("#dir-hospital").text("Zapopan, Jalisco, México");
      //change description
      $("#description-hospital").text("The Ambulatory Surgery Center began"+
      " operations in May 2004, distinguishing itself as a short-stay surgery"+
      " unit composed of a team of specialist doctors focused on providing a"+
      " diagnosis and treatment for the benefit of the community, faithful to"+
      " the line that Has been pursuing since the foundation of "+
      " The Puerta de Hierro Medical Group. At the Puerta de Hierro Surgery"+
      " Center we have the recognition of the General Health Council, a"+
      " federal health authority for compliance with national and"+
      " international standards in safety, medical care, hospital"+
      " infrastructure and current regulations.");
      //show detail
      $("#detail-sur").hide();
      $("#detail-zapopan").hide();
      $("#detail-ambulatoria").show();
      $("#detail-tepic").hide();
      $("#detail-colima").hide();
      //save on variable
      hospital = "588ab94800dff2cb2bfeedc4";
      //get correct medics to show
      medicsArr = medicsQuery(medicsJson, hospital, specialityId);
    });
    $("#show-detail-tepic").click(function(){
      //change name
      $("#name-hospital").text("Centro Médico Puerta de Hierro Tepic");
      $("#dir-hospital").text("Tepic, Nayarit, México");
      //change description
      $("#description-hospital").text("The Puerta de Hierro Tepic Medical"+
      " Center began operations in September 2010, distinguishing itself as"+
      " a Specialty Hospital with a specialized medical staff focused on"+
      " providing a diagnosis and timely treatment for the benefit of the"+
      " community, faithful to the line it has pursued since the founding of"+
      " the Puerta de Hierro Medical Group. At Puerta de Hierro Medical Center"+
      " Tepic we have the recognition of the General Health Council, a"+
      " federal health authority for compliance with national standards in"+
      " safety, medical care, hospital infrastructure and current"+
      " regulations.");
      //show detail
      $("#detail-sur").hide();
      $("#detail-zapopan").hide();
      $("#detail-ambulatoria").hide();
      $("#detail-tepic").show();
      $("#detail-colima").hide();
      //save on variable
      hospital = "588ab96700dff2cb2bfeedc6";
      //get correct medics to show
      medicsArr = medicsQuery(medicsJson, hospital, specialityId);
    });
    $("#show-detail-colima").click(function(){
      //change name
      $("#name-hospital").text("Centro Médico Puerta de Hierro Colima");
      $("#dir-hospital").text("Colima, Colima, México");
      //show description
      $("#description-hospital").text("The Puerta de Hierro Colima Medical"+
      " Center starts operations in September 2012, distinguishing itself as"+
      " a Specialties Hospital integrated by a specialized medical corps"+
      " focused on providing a diagnosis and timely treatment for the"+
      " benefit of the community, faithful to the line it has pursued since"+
      " the founding of The Puerta de Hierro Medical Group.");
      //show detail
      $("#detail-sur").hide();
      $("#detail-zapopan").hide();
      $("#detail-ambulatoria").hide();
      $("#detail-tepic").hide();
      $("#detail-colima").show();
      //save on variable
      hospital = "588ab9dd00dff2cb2bfeedc7";
      //get correct medics to show
      medicsArr = medicsQuery(medicsJson, hospital, specialityId);
    });

    //fill variables on the form for the Database
    $("#fname").on("keyup change", function() {
      fname = this.value;
      $("#dom_element").text(this.value);
    });
    $("#lname").on("keyup change", function() {
      lname = this.value;
      $("#dom_element").text(this.value);
    });
    $("#email").on("keyup change", function() {
      email = this.value;
      $("#dom_element").text(this.value);
    });
    $("#phone").on("keyup change", function() {
      phone = this.value;
      $("#dom_element").text(this.value);
    });
    $("#birthdate").on("keyup change", function() {
      birthdate = this.value;
      $("#dom_element").text(this.value);
    });

    $("#button-send").click(function(){
      //get last variables
      gender = $("input[name='radio-gender']:checked").val();
      var sel =  document.getElementById("country");
      country = sel.options[sel.selectedIndex].text;

      //get json
      /*
      $.getJSON('http://localhost:8080/api/patient',function(json){
        var id;
        var patientsArray=getObjects(json, 'email', email);
        if(patientsArray.length==0){
          var jsonPatient = {
            'name':{
              'first_name':fname,
              'last_name':lname
            },
            'email':email,
            'phone':phone,
            'birthdate':birthdate,
            'gender':gender,
            'conntry':country
          };
        }else{
          id = patientsArray[0]._id;
        }
      });
      */

      console.log(ailment);
      console.log("specialty: "+specialityId);
      console.log("hospital: "+hospital);
      console.log(concierge);
      console.log(fname);
      console.log(lname);
      console.log(email);
      console.log(phone);
      console.log(birthdate);
      console.log(gender);
      console.log("country: "+country);

      window.location.href = "endcard.html";
    });

  });
