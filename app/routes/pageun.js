import Route from '@ember/routing/route';
import Ember from 'ember';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PageunRoute extends Route {

  @action
  add() {
    var listeDisp = document.getElementById("dispo");
    var listeSelect= document.getElementById("selectionn");
    var texte = listeDisp.options[listeDisp.selectedIndex].text;
    var opt = document.createElement('option');
    opt.value = 1;opt.innerHTML = texte;
    listeSelect.appendChild(opt);
    for (var i=0; i<listeDisp.length; i++) {
    if (listeDisp.options[i].text == texte)
        listeDisp.remove(i);
    }
  }
  @action
  addall() {
    //TODO
  }
  @action
  remove() {
    var listeSelect = document.getElementById("dispo");
    var listeDisp= document.getElementById("selectionn");
    var texte = listeDisp.options[listeDisp.selectedIndex].text;
    var opt = document.createElement('option');
    opt.value = 1;opt.innerHTML = texte;
    listeSelect.appendChild(opt);
    for (var i=0; i<listeDisp.length; i++) {
    if (listeDisp.options[i].text == texte)
        listeDisp.remove(i);
    }
  }
  @action
  removeall() {
    //TODO
  }
}
