import { NgModule } from '@angular/core';<% if (commonModule) { %>
import { CommonModule } from '@angular/common';<% } %><% if (routing) { %>

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

@NgModule({
  exports: []
})
export class <%= classify(name) %>SharedModule { }

@NgModule({
  declarations: [],
  imports: [<% if (commonModule) { %>
    CommonModule<%= routing ? ',' : '' %><% } %><% if (routing) { %>
  <%= classify(name) %>RoutingModule<% } %>,
    <%= classify(name) %>SharedModule
  ]
})
export class <%= classify(name) %>Module { }
