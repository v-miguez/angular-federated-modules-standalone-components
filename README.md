# Starterkit for Trying out @angular-architects/module-federation

To add new project

@angular-architects/module-federation
ng add @angular-architects/module-federation --project projectName --port port --type remote/host/dynamic-host

for standalone components architecture make sure to export the project routes on bootstap.ts

if (environment.production) {
enableProdMode();
}

bootstrapApplication(AppComponent, {
providers: [importProvidersFrom(RouterModule.forRoot(project_ROUTES))],
});
