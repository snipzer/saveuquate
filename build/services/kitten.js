"use strict";

function createLine(data) {
    var line = "<tr>";
    line += "<td>" + data['name'] + "</td>";
    line += "<td>" + data['color'] + "</td>";
    line += "<td>" + data['primaryQuality'][0] + "</td>";
    line += "<td>";
    line += data['secondQuality'][1] ? data['secondQuality'][1] : "aucune";
    line += "</td>";
    line += "<td>" + data['primaryDefault'] + "</td>";
    line += "<td>" + data['kibbles'] + "</td>";
    line += "<td>";
    line += data['isAvailable'] ? "adoptée" : "disponible";
    line += "</td>";
    line += "<td>";
    line += data['isAvailable'] ? '' : '<a href="#" onclick="sendAdoptRequest(' + data["id"] + ')">Adoptez moi</a>';
    line += "</td>";

    return line;
}

// fetch all kittens
function fetchKittens() {
    $.ajax({ //faire une requette ajax
        url: 'http://localhost:8080/mock/kittens.json', //url d'appel
        type: 'GET',
        dataType: 'json',
        success: function success(json, status) {
            $("#kittens-table tbody tr").remove();

            $.each(json, function (i, data) {

                $("#kittens-table").append(createLine(data));
            });
        },
        error: function error(result, status, _error) {//en cas d'erreur
        }
    });
}

// fetch adopted kittens
function fetchAdoptedKittens() {
    $.ajax({
        url: 'http://localhost:8080/mock/kittens.json',
        /*
         url: 'http://localhost:8080/api/1.0/kittens/adopt',
         */
        type: 'GET',
        dataType: 'json',
        success: function success(json, status) {
            $("#kittens-table tbody tr").remove();

            $.each(json, function (i, data) {

                $("#kittens-table").append(createLine(data));
            });
        },
        error: function error(result, status, _error2) {}
    });
}

// fetch available kittens
function fetchAvailableKittens() {
    $.ajax({
        url: 'http://localhost:8080/mock/kittens.json',
        /*
         url: 'http://localhost:8080/api/1.0/kittens/adopted',
         */
        type: 'GET',
        dataType: 'json',
        success: function success(json, status) {
            $("#kittens-table tbody tr").remove();

            $.each(json, function (i, data) {

                $("#kittens-table").append(createLine(data));
            });
        },
        error: function error(result, status, _error3) {}
    });
}

// send a request to adopt a kitten
function sendAdoptRequest(kittenId) {
    $.ajax({
        url: 'http://localhost:8080/mock/kittensAdopted.json',
        type: 'GET',
        /*
         url: 'http://localhost:8080/api/1.0/kittens/'+kittenId'+/adopted,
         type: 'PUT',
         */
        dataType: 'json',
        success: function success(json, status) {

            fetchKittens();
        },
        error: function error(result, status, _error4) {}
    });
}

// At start : load kittens
$(document).ready(function () {
    fetchKittens();
});