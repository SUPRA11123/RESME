# -*- coding: utf-8 -*-
"""
Created on Thu Mar 18 15:19:17 2021

@author: Michelle Schmitt
"""
import pandas as pd
import numpy as np

import plotly.express as px  # (version 4.7.0)
   
import dash  # (version 1.12.0) pip install dash
from dash import dcc
from dash import html
from dash.dependencies import Input, Output
    
########## IMPORT DATA ################
df1 = pd.read_excel('.\\Data\\insolvencies_nuts1.xlsx')
df2 = pd.read_excel('.\\Data\\insolvencies_nuts2.xlsx')
df3 = pd.read_excel('.\\Data\\insolvencies_nuts3.xlsx')
dfs = [df1,df2,df3]

locs = ['NUTS1','NUTS2','NUTS3']

#################################################
#################################################
#################################################
########### DASHBOARD CREATION ##################
#################################################
#################################################
#################################################

#Get the data for choropleth Map cordinates
import json

with open('.\\NUTS_2021_01M_geojson\\NUTS_RG_01M_2021_4326_LEVL_1.geojson', encoding='utf-8') as f:
    counties1 = json.load(f)

with open('.\\NUTS_2021_01M_geojson\\NUTS_RG_01M_2021_4326_LEVL_2.geojson', encoding='utf-8') as f:
    counties2 = json.load(f)
    
with open('.\\NUTS_2021_01M_geojson\\NUTS_RG_01M_2021_4326_LEVL_3.geojson', encoding='utf-8') as f:
    counties3 = json.load(f)
    
counties = [counties1, counties2, counties3]

#Make an Interactive Web App displaying Choropleth Map of Insolvencies
app = dash.Dash(__name__)

app.layout = html.Div([
        
    html.H1("RESME Insolvency Dashboard", style={'text-align': 'center'}), #Heading
    html.H2("Number of insolvencies per 10,000 firms", style={'text-align': 'center'}), #Heading
    
    #Dropdown Menu to select NUTS level
    html.Label(['Please Select a NUTS Level',
                dcc.Dropdown(id="Select_Nlevel",
                  options=[
                      {"label": "NUTS 1", "value": 0},
                      {"label": "NUTS 2", "value": 1},
                      {"label": "NUTS 3", "value": 2}],
                  multi=False,
                  value=0,
                  style={'width': "40%"}
                  )]),

    #Dropdown Menu to select year
    html.Label(['Please Select a year',
                dcc.Dropdown(id="Select_year",
                  options=[
                      {"label": "2022", "value": 1},
                      {"label": "2023", "value": 2},
                      {"label": "2024", "value": 3}],
                  multi=False,
                  value=0,
                  style={'width': "40%"}
                  )]),


    # For documentation of Dropdown Menu please visit (https://dash.plotly.com/dash-core-components/dropdown)
    # For documentation of Slider Menu please visit (https://dash.plotly.com/dash-core-components/slider)

    
    # Notice that I have commented out the slider option but you can use it to 
    # create your own slider

    #Slider menu to select the weeks
     #dcc.Slider(
     #        id = 'week_slider',
     #        updatemode = 'mouseup', #don't let it update till mouse released
     #        min = 1,
     #        max = 8,
     #        step= 1,
     #        value = 1,
     #        marks={1: 'Week 1 (Jan)',
     #               2: 'Week 2 (Jan)',
     #               3: 'Week 3 (Jan)',
     #               4: 'Week 4 (Jan)',
     #               5: 'Week 5 (Feb)',
     #               6: 'Week 6 (Feb)',
     #               7: 'Week 7 (Feb)',
     #               8: 'Week 8 (Feb)'}
     #    ),
     
     
     #Slider menu to select the months
     #dcc.Slider(
     #        id = 'week_slider',
     #        updatemode = 'mouseup', #don't let it update till mouse released
     #        min = 1,
     #        max = 8,
     #        step= 1,
     #        value = 1,
     #        marks={1: 'Jan 2021',
     #               2: 'Feb 2021',
     #               3: 'Mar 2021'}
     #    ),
    
    
    
    #html.Div(id='output_container', children=[]),
    #html.Br(),
    

    dcc.Graph(id='TF Map Plot',figure={})
    
])

   
# ------------------------------------------------------------------------------
# Connect the Plotly graphs with Dash Components
@app.callback(
     #Output('output_container', 'children'),
     Output('TF Map Plot', 'figure'),
     Input('Select_Nlevel','value'),
     Input('Select_year','value'),
     #Input('week_slider','value')
     )

# IF you are using the slider option, uncomment the Input line above and 
# also include it as an argument of the following update_graph function.
 
#def update_graph(Select_Nlevel): #, week_slider
    
    #container= "The chosen month {}".format(week_slider)
    
    #fig = px.choropleth_mapbox(dfs[Select_Nlevel], geojson=counties[Select_Nlevel], 
#                               locations=locs[Select_Nlevel], 
#                               #color = str(df.columns[week_slider]),
 #                              color = dfs[Select_Nlevel].columns[week_slider],
 #                              featureidkey="properties.NUTS_ID",
#                               range_color=[0,dfs[Select_Nlevel].max(numeric_only=True).max()],
 #                              mapbox_style="carto-positron",
 #                              color_continuous_scale= 'hot_r',
 #                              zoom=5.2,
 #                              center = {"lat": 51.1657, "lon": 10.4515},
 #                              opacity=0.5
 #                             )
#    fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0},height=700)
    
#    return(container, fig)


def update_graph(Select_Nlevel, Select_year): #, week_slider
    
    #container= "The chosen month {}".format(week_slider)
    
    fig = px.choropleth_mapbox(dfs[Select_Nlevel], geojson=counties[Select_Nlevel], 
                               locations=locs[Select_Nlevel], 
                               #color = str(df.columns[week_slider]),
                               color = dfs[Select_Nlevel].columns[Select_year],
                               featureidkey="properties.NUTS_ID",
                               range_color=[0,dfs[Select_Nlevel].max(numeric_only=True).max()],
                               mapbox_style="carto-positron",
                               color_continuous_scale= 'hot_r',
                               zoom=5.2,
                               center = {"lat": 51.1657, "lon": 10.4515},
                               opacity=0.5
                              )
    fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0},height=700)
    
    return(fig)

    
if __name__ == '__main__':
    app.run(debug=True, port=5000)


